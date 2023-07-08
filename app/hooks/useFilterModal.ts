import { create } from "zustand"

interface FilterModalStore{
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}
const useFilterModal = create<FilterModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))

export default useFilterModal;