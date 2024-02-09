export default function useHighlightTitle() {
  const highlightTitle = (text) => {
    return text.replace(/(АВТОМАТИЧНО БУДУТЬ РОБИТИ ВАС ЗДОРОВИМИ )/g, '<span style="color: #00B200;">$1</span>')
  }

  return {
    highlightTitle
  }
}