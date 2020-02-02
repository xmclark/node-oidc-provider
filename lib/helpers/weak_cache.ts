const map = new WeakMap();

export function instance(ctx: OIDCContext) {
  if (!map.has(ctx)) map.set(ctx, {});
  return map.get(ctx);
}
