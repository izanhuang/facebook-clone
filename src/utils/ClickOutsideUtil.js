import { useRef, useEffect } from 'react'

export default function handleClickOutside(
  event,
  isOpen,
  setIsOpen,
  wrapperRef,
) {
  if (
    isOpen &&
    wrapperRef.current &&
    !wrapperRef.current.contains(event.target)
  ) {
    // console.log('close dropdown')
    setIsOpen(false)
    document.removeEventListener('mousedown', handleClickOutside)
  }
  // document.removeEventListener('mousedown', handleClickOutside)
}
