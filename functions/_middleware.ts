import * as Sentry from "@sentry/cloudflare";

export const onRequest: PagesFunction<Env> = (context) =>
    Sentry.sentryPagesPlugin({
        dsn: context.env.SENTRY_DSN,
        tracesSampleRate: 1,
    })(
        // The typing is too strict here, will fix in next release of @sentry/cloudflare
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        context as any,
    );
