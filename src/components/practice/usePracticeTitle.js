export default function usePracticeTitle() {
  const practiceTitle = (text) => {
    return text.replace(/(20 ПРАКТИК)/g, '<span style="color: #00B200;">$1</span>')
  }

  return {
    practiceTitle
  }
}