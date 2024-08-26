import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  podcasts: defineTable({
    audio_storage_id: v.optional(v.id("_storage")),
    user: v.id("users"),
    podcast_title: v.string(),
    podcast_description: v.string(),
    audio_url: v.optional(v.string()),
    image_url: v.optional(v.string()),
    image_storage_id: v.optional(v.id("_storage")),
    author: v.string(),
    author_id: v.string(),
    author_image_url: v.string(),
    voice_prompt: v.string(),
    image_prompt: v.string(),
    voice_type: v.string(),
    audio_duration: v.number(),
    views: v.number(),
  })
    .searchIndex("search_author", { searchField: "author" })
    .searchIndex("search_title", { searchField: "podcast_title" })
    .searchIndex("search_description", { searchField: "podcast_description" }),
  users: defineTable({
    email: v.string(),
    image_url: v.string(),
    clerk_id: v.string(),
    name: v.string(),
  }),
});
