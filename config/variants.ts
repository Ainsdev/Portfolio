export default function variant(cursor: { x: number; y: number }) {
  return {
    default: {
      x: cursor.x - 24,
      y: cursor.y - 24,
      zIndex: 999,

      width: 48,
      height: 48,
      transition: {
        duration: 0.1,
        type: "spring",
      },
    },
    hovered: {
      x: cursor.x - 24,
      y: cursor.y - 24,
      zIndex: 30,
      transition: {
        duration: 0.1,
        type: "spring",
      },
    },
    text: {
      x: cursor.x - 24,
      y: cursor.y - 24,
      zIndex: 99,
      width: 120,
      height: 120,
      mixBlendMode: "difference",
      transition: {
        duration: 0.1,
        type: "spring",
      },
    },
    sText: {
      x: cursor.x - 24,
      y: cursor.y - 24,
      zIndex: 99,
      width: 120,
      height: 120,
      mixBlendMode: "hard-light",
      transition: {
        duration: 0.1,
        type: "spring",
      },
    },
    project: {
      x: cursor.x,
      y: cursor.y,
      zIndex: 99,
      width: 400,
      height: 300,
      transition: {
        duration: 0.1,
        type: "spring",
      },
    },
  }
}
