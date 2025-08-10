"use client"

import { useState } from "react"
import { ChevronLeft, Earth, AlertCircle } from "lucide-react"

export default function Upgrade() {
  const [billingFrequency, setBillingFrequency] = useState("monthly")
  const [paymentMethod, setPaymentMethod] = useState("credit")
  const [saveCardDetails, setSaveCardDetails] = useState(false)
  const [allowAutomaticPayment, setAllowAutomaticPayment] = useState(false)
  const [paymentFailed, setPaymentFailed] = useState(true) // Set to true to show the error as in the image

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black pt-28">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl bg-card-bg text-white  rounded-lg shadow-lg overflow-hidden">
        {/* Left Column: Plan Details */}
        <div className="lg:w-1/3 p-6 border  border-gray-400 rounded-md mr-5 bg-gradient-to-br from-gray-700/50 via-gray-700 to-gray-700/50">
          <div className="flex items-center space-x-4 mb-8">
            <button className="text-text-light-grey hover:text-white">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-2 text-xl font-bold">
              <Earth className="h-6 w-6" />
              <span>EARTH AI-Q</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-2">Upgrade your plan</h2>
          <p className="text-5xl font-bold mb-2">$99.00</p>
          <p className="text-text-dark-grey text-sm mb-8">we will bill you $99.00 monthly + taxes, unless you cancel</p>

          <div className="bg-input-bg p-4 rounded-md mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Pro</span>
              <span className="text-text-dark-grey">$20</span>
            </div>
            <p className="text-text-dark-grey text-sm">
              Unlock advanced features and full access to our AI-powered global intelligence platform.
            </p>
          </div>

          <button className="w-full h-10 bg-button-google-bg hover:bg-button-google-hover-bg text-white font-semibold py-2 rounded-md mb-6">
            Add promo code
          </button>

          <div className="space-y-2 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-text-light-grey">Subtotal</span>
              <span className="text-white">$20.00</span>
            </div>
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total due today</span>
              <span>$200.00</span>
            </div>
          </div>

          <div className="space-y-4">
            <label htmlFor="save-card" className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                id="save-card"
                checked={saveCardDetails}
                onChange={() => setSaveCardDetails(!saveCardDetails)}
                className="h-4 w-4 rounded border border-border-dark bg-input-bg text-blue-primary focus:ring-blue-primary focus:ring-offset-0 focus:ring-offset-card-bg checked:bg-blue-primary checked:border-blue-primary"
              />
              <span className="text-text-light-grey">Save card details</span>
            </label>
            <label htmlFor="auto-payment" className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                id="auto-payment"
                checked={allowAutomaticPayment}
                onChange={() => setAllowAutomaticPayment(!allowAutomaticPayment)}
                className="h-4 w-4 rounded border border-border-dark bg-input-bg text-blue-primary focus:ring-blue-primary focus:ring-offset-0 focus:ring-offset-card-bg checked:bg-blue-primary checked:border-blue-primary"
              />
              <span className="text-text-light-grey">Allow Automatic payment</span>
            </label>
          </div>
        </div>

        {/* Right Column: Payment Details */}
        <div className="lg:w-2/3 p-6 space-y-6 border  border-gray-400 rounded-md mr-5 bg-gradient-to-br from-gray-700/50 via-gray-700 to-gray-700/50">
          <div>
            <h3 className="text-lg font-semibold mb-4">Billing frequency</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setBillingFrequency("monthly")}
                className={`flex-1 h-20 rounded-md border ${
                  billingFrequency === "monthly"
                    ? "border-blue-primary bg-blue-primary/20"
                    : "border-border-dark bg-input-bg"
                } text-white font-semibold py-2 px-4 hover:bg-blue-primary/30 transition-colors`}
              >
                <span className="block text-sm text-text-dark-grey">Pay monthly</span>
                <span className="block text-lg">$249/month</span>
              </button>
              <button
                onClick={() => setBillingFrequency("yearly")}
                className={`flex-1 h-20 rounded-md border ${
                  billingFrequency === "yearly"
                    ? "border-blue-primary bg-blue-primary/20"
                    : "border-border-dark bg-input-bg"
                } text-white font-semibold py-2 px-4 hover:bg-blue-primary/30 transition-colors`}
              >
                <span className="block text-sm text-text-dark-grey">Pay yearly</span>
                <span className="block text-lg">$249/yearly</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Payment method</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <button
                onClick={() => setPaymentMethod("credit")}
                className={`h-12 rounded-md border ${
                  paymentMethod === "credit"
                    ? "border-blue-primary bg-blue-primary/20"
                    : "border-border-dark bg-input-bg"
                } text-white font-semibold py-2 px-4 hover:bg-blue-primary/30 transition-colors`}
              >
                Credit or Debit card
              </button>
              <button
                onClick={() => setPaymentMethod("paypal")}
                className={`h-12 rounded-md border ${
                  paymentMethod === "paypal"
                    ? "border-blue-primary bg-blue-primary/20"
                    : "border-border-dark bg-input-bg"
                } text-white font-semibold py-2 px-4 flex items-center justify-center hover:bg-blue-primary/30 transition-colors`}
              >
                <img src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1754748243/Group_1_yqivuf.png" alt="PayPal" className="h-6 w-6" />
              </button>
              <button
                onClick={() => setPaymentMethod("applepay")}
                className={`h-12 rounded-md border ${
                  paymentMethod === "applepay"
                    ? "border-blue-primary bg-blue-primary/20"
                    : "border-border-dark bg-input-bg"
                } text-white font-semibold py-2 px-4 flex items-center justify-center hover:bg-blue-primary/30 transition-colors`}
              >
                <img src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1754748243/Vector_4_jzfkrw.png" alt="Apple Pay" className="h-5 w-14" />
              </button>
              <button
                onClick={() => setPaymentMethod("googlepay")}
                className={`h-12 rounded-md border ${
                  paymentMethod === "googlepay"
                    ? "border-blue-primary bg-blue-primary/20"
                    : "border-border-dark bg-input-bg"
                } text-white font-semibold py-2 px-4 flex items-center justify-center hover:bg-blue-primary/30 transition-colors`}
              >
                <img src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1754748243/logos_google-pay_hdwxwx.png" alt="Google Pay" className="h-5 w-14" />
              </button>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4">Payment information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-2">
              <label htmlFor="card-number" className="block text-sm text-text-light-grey mb-1">
                Card number
              </label>
              <input
                id="card-number"
                type="text"
                placeholder="0000 0000 0000 0000"
                className="flex h-10 w-full rounded-md border border-border-dark bg-input-bg px-3 py-2 text-sm text-white placeholder:text-text-dark-grey focus:outline-none focus:ring-0 focus:border-blue-primary"
              />
            </div>
            <div>
              <label htmlFor="expiry-date" className="block text-sm text-text-light-grey mb-1">
                Expiry date
              </label>
              <input
                id="expiry-date"
                type="text"
                placeholder="MM/YY"
                className="flex h-10 w-full rounded-md border border-border-dark bg-input-bg px-3 py-2 text-sm text-white placeholder:text-text-dark-grey focus:outline-none focus:ring-0 focus:border-blue-primary"
              />
            </div>
            <div>
              <label htmlFor="cvc" className="block text-sm text-text-light-grey mb-1">
                CVC
              </label>
              <input
                id="cvc"
                type="text"
                placeholder="3-digit code"
                className="flex h-10 w-full rounded-md border border-border-dark bg-input-bg px-3 py-2 text-sm text-white placeholder:text-text-dark-grey focus:outline-none focus:ring-0 focus:border-blue-primary"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="name-on-card" className="block text-sm text-text-light-grey mb-1">
              Name on card
            </label>
            <input
              id="name-on-card"
              type="text"
              placeholder="e.g larkll Beridze"
              className="flex h-10 w-full rounded-md border border-border-dark bg-input-bg px-3 py-2 text-sm text-white placeholder:text-text-dark-grey focus:outline-none focus:ring-0 focus:border-blue-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="street-address" className="block text-sm text-text-light-grey mb-1">
              Address
            </label>
            <input
              id="street-address"
              type="text"
              placeholder="Street Address or po box"
              className="flex h-10 w-full rounded-md border border-border-dark bg-input-bg px-3 py-2 text-sm text-white placeholder:text-text-dark-grey focus:outline-none focus:ring-0 focus:border-blue-primary mb-2"
            />
            <input
              id="apt-suite"
              type="text"
              placeholder="Apt,suite,unit,building (Optional)"
              className="flex h-10 w-full rounded-md border border-border-dark bg-input-bg px-3 py-2 text-sm text-white placeholder:text-text-dark-grey focus:outline-none focus:ring-0 focus:border-blue-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="city" className="block text-sm text-text-light-grey mb-1">
                City
              </label>
              <input
                id="city"
                type="text"
                placeholder="e.g larkll Beridze"
                className="flex h-10 w-full rounded-md border border-border-dark bg-input-bg px-3 py-2 text-sm text-white placeholder:text-text-dark-grey focus:outline-none focus:ring-0 focus:border-blue-primary"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm text-text-light-grey mb-1">
                State
              </label>
              <input
                id="state"
                type="text"
                placeholder="State, province, region"
                className="flex h-10 w-full rounded-md border border-border-dark bg-input-bg px-3 py-2 text-sm text-white placeholder:text-text-dark-grey focus:outline-none focus:ring-0 focus:border-blue-primary"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="country" className="block text-sm text-text-light-grey mb-1">
              Country
            </label>
            <select
              id="country"
              className="flex h-10 w-full rounded-md border border-border-dark bg-input-bg px-3 py-2 text-sm text-white focus:outline-none focus:ring-0 focus:border-blue-primary appearance-none pr-8"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1em",
              }}
            >
              <option value="" className="bg-input-bg text-text-dark-grey">
                Select country
              </option>
              <option value="usa" className="bg-input-bg text-white">
                United States
              </option>
              <option value="canada" className="bg-input-bg text-white">
                Canada
              </option>
              <option value="uk" className="bg-input-bg text-white">
                United Kingdom
              </option>
            </select>
          </div>

          <button className="w-full h-10 bg-blue-primary hover:bg-blue-hover text-white font-semibold py-2 rounded-md mb-4">
            Proceed to payment
          </button>

          {paymentFailed && (
            <div className="flex items-start space-x-2 p-4 rounded-md bg-red-900/20 border border-red-700 text-red-400">
              <AlertCircle className="h-5 w-5 mt-0.5" />
              <div>
                <p className="font-semibold">Payment Failed</p>
                <p className="text-sm">
                  Something went wrong while processing your payment. Please check your card details or try again later.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
