/**
 * @param {string} href New tab's page URL.
 * @description Opens a specified URL in a new tab using `target='_blank'`.
 * @link [Source gist](https://gist.github.com/AliAlmasi/a8b50b0f531e1fa87f089569067800fe)
 */
export default function newtab(href: string): void {
	const a: HTMLAnchorElement = document.createElement("a");
	a.href = href;
	a.setAttribute("target", "_blank");
	a.click();
	a.remove();
}
