export default function useHighlightText() {
  const highlightText = (text) => {
    return text.replace(/(можуть викликати стан: "я - хворий")/g, '<span style="color: green;">$1</span>')
  }

  return {
    highlightText
  }
}