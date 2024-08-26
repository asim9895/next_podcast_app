import { v, ConvexError } from "convex/values";
import { internalMutation, query } from "./_generated/server";

// add user into database with args values
export const create_user = internalMutation({
  args: {
    clerk_id: v.string(),
    email: v.string(),
    image_url: v.string(),
    name: v.string(),
  },
  handler: async (ctx, { clerk_id, email, image_url, name }) => {
    await ctx.db.insert("users", { clerk_id, email, image_url, name });
  },
});

export const user_by_id = query({
  args: { clerk_id: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerk_id"), args.clerk_id))
      .unique();

    if (!user) {
      throw new ConvexError("User not found");
    }

    return user;
  },
});

// this query is used to get the top user by podcast count. first the podcast is sorted by views and then the user is sorted by total podcasts, so the user with the most podcasts will be at the top.
export const get_top_user_by_podcast_count = query({
  args: {},
  handler: async (ctx, args) => {
    const user = await ctx.db.query("users").collect();

    const userData = await Promise.all(
      user.map(async (u) => {
        const podcasts = await ctx.db
          .query("podcasts")
          .filter((q) => q.eq(q.field("author_id"), u.clerk_id))
          .collect();

        const sorted_podcasts = podcasts.sort((a, b) => b.views - a.views);

        return {
          ...u,
          total_podcasts: podcasts.length,
          podcast: sorted_podcasts.map((p) => ({
            podcast_title: p.podcast_title,
            podcast_id: p._id,
          })),
        };
      })
    );

    return userData.sort((a, b) => b.total_podcasts - a.total_podcasts);
  },
});

export const update_user = internalMutation({
  args: {
    clerk_id: v.string(),
    image_url: v.string(),
    email: v.string(),
  },
  async handler(ctx, args) {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerk_id"), args.clerk_id))
      .unique();

    if (!user) {
      throw new ConvexError("User not found");
    }

    await ctx.db.patch(user._id, {
      image_url: args.image_url,
      email: args.email,
    });

    const podcast = await ctx.db
      .query("podcasts")
      .filter((q) => q.eq(q.field("author_id"), args.clerk_id))
      .collect();

    await Promise.all(
      podcast.map(async (p) => {
        await ctx.db.patch(p._id, {
          author_image_url: args.image_url,
        });
      })
    );
  },
});

export const delete_user = internalMutation({
  args: { clerk_id: v.string() },
  async handler(ctx, args) {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerk_id"), args.clerk_id))
      .unique();

    if (!user) {
      throw new ConvexError("User not found");
    }

    await ctx.db.delete(user._id);
  },
});
