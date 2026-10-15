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

## Application architecture
- Keep the existing TanStack Start framework and seven file-based public pages; the shared shell belongs in the root route to maintain navigation consistency.
- Centralize editable copy, official links and media references in `src/lib/site-content.ts`; do not add paid services or persistence for this informational site.
- Use global semantic design tokens and reusable editorial components so pages maintain the same visual identity.
- Display generated imagery only as labeled illustration; member records and event details require verified source material before publication.
