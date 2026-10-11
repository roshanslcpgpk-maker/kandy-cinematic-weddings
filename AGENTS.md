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

## Application rules
- Keep this independent concept as a single-page editorial experience with section anchors, because all requested content belongs to one browsing journey.
- Keep enquiry handling exclusively in browser component state with no persistence or outbound calls, because the form is a non-transmitting demonstration.
- Define the visual system in src/styles.css and use design-system buttons for controls, because all sections must share accessible, consistent presentation.
