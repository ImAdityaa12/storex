import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createFile = mutation({
  args: {
    name: v.string(),
    orgId: v.string(),
  },
  async handler(ctx, args) {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new ConvexError("Not signed in");
    }
    await ctx.db.insert("files", {
      args: args.name,
      orgId: args.orgId,
    });
  },
});

export const collectFiles = query({
  args: {
    orgId: v.string(),
  },
  async handler(ctx, args) {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return [];
    }
    return await ctx.db
      .query("files")
      .filter((q) => q.eq(q.field("orgId"), args.orgId))
      .collect();
  },
});
