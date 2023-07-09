import {create} from 'zustand';

interface CartLengthStore{
    cartLength: string
    setCartLength: (length:string ) => void
}

const useCartLength = create<CartLengthStore>((set) => ({
    cartLength: "0",
    setCartLength: (newCartLength: string) => set({ cartLength: newCartLength })
}))

export default useCartLength