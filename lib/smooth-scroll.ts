/**
 * Smooth scroll utility functions
 */

const HEADER_HEIGHT = 64; // Height of sticky header in pixels

/**
 * Smoothly scrolls to an element by its ID
 * @param elementId - The ID of the element to scroll to (without the #)
 * @param offset - Additional offset from the top (default: header height)
 */
export function smoothScrollTo(elementId: string, offset: number = HEADER_HEIGHT): void {
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with id "${elementId}" not found`);
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

/**
 * Handles click event for smooth scrolling
 * @param e - The click event
 * @param elementId - The ID of the element to scroll to (without the #)
 * @param offset - Additional offset from the top (default: header height)
 */
export function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  elementId: string,
  offset: number = HEADER_HEIGHT
): void {
  e.preventDefault();
  smoothScrollTo(elementId, offset);
}

