
export const checkIsInView = ({
  container,
  node,
  onUpdate
}: {
  node: Element | undefined;
  container: HTMLElement | undefined;
  onUpdate?: ({ isInView }: { isInView: boolean }) => void;
}) => {
  let isInView = false;

  if (!container || !node) {
    if (onUpdate) {
      onUpdate({ isInView });
    }
    return false;
  }

  const imageRect = node.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  const isTotallyInView =
    imageRect.left >= containerRect.left && imageRect.right <= containerRect.right;

  if (isTotallyInView) {
    if (onUpdate) {
      onUpdate({ isInView: true });
    }

    return isInView;
  }

  const isTotallyOutOfView =
    imageRect.right < containerRect.left || imageRect.left > containerRect.right;

  if (isTotallyOutOfView) {
    if (onUpdate) {
      onUpdate({ isInView: false });
    }
    return isInView;
  }

  const imageIsLargerThanContainerAndInView =
    imageRect.left <= containerRect.left && imageRect.right >= containerRect.right;

  if (imageIsLargerThanContainerAndInView) {
    if (onUpdate) {
      onUpdate({ isInView: true });
    }
    return isInView;
  }

  const decimalInView =
    imageRect.left <= containerRect.left
      ? (imageRect.right - containerRect.left) / imageRect.width
      : (containerRect.right - imageRect.left) / imageRect.width;

  isInView = decimalInView >= 0.95;

  if (onUpdate) {
    onUpdate({ isInView });
  }

  return isInView;
};