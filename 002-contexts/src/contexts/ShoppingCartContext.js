import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = (props) => {
  const [selectedProducts, setSelectedProducts] = useState(
    JSON.parse(localStorage.getItem("selectedProducts")) || []
  );

  //   const obieketRozpropagowanyPoApce = {
  //     selectedProducts: selectedProducts,
  //     setSelectedProducts: setSelectedProducts,
  //   };

  const addProductToCart = (newSelectedProduct) => {
    // const newSelectedProducts = [...selectedProducts, newSelectedProduct];
    const newSelectedProducts = [
      ...selectedProducts,
      { ...newSelectedProduct, amount: 1 },
    ];

    setSelectedProducts(newSelectedProducts);

    localStorage.setItem(
      "selectedProducts",
      JSON.stringify(newSelectedProducts)
    );
  };

  const removeProductFromCart = (productIdToDelete) => {
    /**
     * 1. stworzenie nowej tablicy selectedProducts
     *    bez produktu który był klinięty (remove button)
     * 2. nowa tablica bez klikniętego produktu powinna zostać użyta:
     * 2.1 jako nowa wartość stanu useState const [selectedProducts, setSelectedProducts] = useState
     * 2.2 jako nowa wartość stanu localStorage klucz "selectedProducts"
     */

    const newSelectedProducts = selectedProducts.filter((product) => {
      if (product.id === productIdToDelete) {
        return false;
      }

      return true;
    });
    setSelectedProducts(newSelectedProducts);
    localStorage.setItem(
      "selectedProducts",
      JSON.stringify(newSelectedProducts)
    );
  };

  const clearShoppingCart = () => {
    setSelectedProducts([]);
    localStorage.removeItem("selectedProducts");
  };

  const increaseProductAmount = (newValue, id) => {
    if (newValue * 1 === 0) {
      return;
    }

    // increaseProductAmount(event.target.value, product.id)
    const newSelectedProducts = selectedProducts.map((product) => {
      if (product.id === id) {
        return { ...product, amount: newValue * 1 };
      } else {
        return product;
      }
    });

    setSelectedProducts(newSelectedProducts);
    localStorage.setItem(
      "selectedProducts",
      JSON.stringify(newSelectedProducts)
    );
  };

  const obieketRozpropagowanyPoApce = {
    selectedProducts,
    addProductToCart,
    removeProductFromCart,
    clearShoppingCart,
    increaseProductAmount,
  };

  return (
    // do propsa value przekazujemy właśnie te dane i informacje które chcemy rozpropagować po całej apce bądź wybranej części apki
    // tymi danymi może być np dane z useState-u, funcje i inne zmienne do których chcemy mieć dostęp z całej apki
    <ShoppingCartContext.Provider value={obieketRozpropagowanyPoApce}>
      {/* <ShoppingCartContext.Provider value={{selectedProducts, setSelectedProducts}}> */}
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

/**
 * przykładowy scenariusz użycia kilku kontekstów na kilku poziomach
 * kontekst ShoppingCartContextProvider dostarcza informacji/danych komponentom
 * - <Koszyk/>
 * - <ListaProduktów/>
 * ALE NIE komponentowi: <UstawieniaUżytkownika/>
 *
 * natomiast <SuperWaznyKontekstProvider> dostarcza informacji/danych
 * wszystkim komponentom oraz contekstowi <ShoppingCartContextProvider> który też defacto jest komponentem
 *
 */

// export const App = () => {
//   return (
//     <div>
//         <SuperWaznyKontekstProvider>
//             <ShoppingCartContextProvider>
//                 <Koszyk/>
//                 <ListaProduktów/>
//             </ShoppingCartContextProvider>

//             <UstawieniaUżytkownika/>
//         </SuperWaznyKontekstProvider>
//     </div>
//   )
// }
