<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Rules

- Type the root route's error component props with `ErrorComponentProps` from `@tanstack/react-router` instead of a hand-written `{ error: Error; reset: () => void }` signature: the router's `error` field is `unknown`, so a narrower hand-written type fails typecheck under the current router versions.
