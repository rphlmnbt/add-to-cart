import CheckoutSection from '../components/AddToCart/CheckoutSection'
import ProductsSection from '../components/AddToCart/ProductsSection'

const AddToCart = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-gray-800 flex flex-col p-5 justify-between">
    <ProductsSection />
    <CheckoutSection />
    </div>
  )
}

export default AddToCart;