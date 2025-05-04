import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(persist(
(set) => ({
			savatcha: [],
		
			addToCards: (product) => 
				set((state) => ({
					savatcha: [...state.savatcha, product]
				})),
		
				deleteCard: (productId) => 
					set((state) => ({
						savatcha: state.savatcha.filter((product) => product._id !== productId)
					})),
	}),
	{
		name: "cards-data",
		getStorage: () => localStorage
	}
))
