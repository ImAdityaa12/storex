import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createFile = mutation({
  args: {
    name: v.string(),
  },
  async handler(ctx, args) {
    await ctx.db.insert("files", {
      args: args.name,
    });
  },
});

export const collectFiles = query({
  args: {},
  async handler(ctx, args) {
    return await ctx.db.query("files").collect();
  },
});
