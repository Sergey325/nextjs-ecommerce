import { create } from "zustand"

interface SupportModalStore{
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}
const useSupportModal = create<SupportModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))

export default useSupportModal;