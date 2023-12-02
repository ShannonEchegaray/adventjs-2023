function manufacture(gifts: string[], materials: string): string[] {
  return gifts.filter((gift) => (
    gift.split("").every((char) => materials.indexOf(char) !== -1)
  ))
}