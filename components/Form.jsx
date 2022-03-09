import React, { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import Notification from './Notification'

const FormComponent = () => {
  const [loading, setLoading] = useState(false)

  const [show, setShow] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      sector: '',
      province: 'Eastern Cape',
      cluster: 'Buffalo City Maritime Clusters',
    },
  })

  const clusterValue = register('cluster')

  console.log(clusterValue)

  const onSubmit = async (data) => {
    setLoading(true)
    console.log(data)
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const mailchimpResponse = await response.json()

    console.log(mailchimpResponse)

    if (mailchimpResponse?.response?.source === 'API - Generic') {
      setLoading(false)
      setShow(true)
      return
    } else {
      const errorMessage = JSON.parse(mailchimpResponse.message.response.text)
      alert(errorMessage.title)
      setLoading(false)
      return
    }
  }
  console.log(errors)

  return (
    <div className="relative">
      {show && <Notification show={show} setShow={setShow} />}
      <div className="mx-auto mt-8 max-w-4xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container mx-auto rounded bg-white shadow"
        >
          <div>
            <div className="w-full border-b border-gray-300">
              <img src="/images/banner.jpeg" alt="" />
            </div>
            <div className="mx-auto w-10/12">
              <div className="container mx-auto">
                <div className="my-8 mx-auto xl:mx-0 xl:w-full">
                  <div className="flex-wrap justify-between md:flex lg:flex xl:flex">
                    <div className="mb-6 flex flex-col md:w-2/5 lg:w-2/5 xl:w-2/5">
                      <label
                        htmlFor="firstName"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        First Name
                      </label>
                      <input
                        {...register('firstName', {
                          required: true,
                          maxLength: 80,
                        })}
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="rounded border border-gray-300 bg-transparent py-3 pl-3 text-sm text-gray-800 shadow-sm focus:border-indigo-700 focus:outline-none  "
                      />
                    </div>
                    <div className="mb-6 flex flex-col md:w-2/5 lg:w-2/5 xl:w-2/5">
                      <label
                        htmlFor="lastName"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Last Name
                      </label>
                      <input
                        {...register('lastName', {
                          required: true,
                          maxLength: 100,
                        })}
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="rounded border border-gray-300 bg-transparent py-3 pl-3 text-sm text-gray-800 shadow-sm focus:border-indigo-700 focus:outline-none  "
                      />
                    </div>
                    <div className="mb-6 flex flex-col md:w-2/5 lg:w-2/5 xl:w-2/5">
                      <label
                        htmlFor="email"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Email
                      </label>
                      <input
                        {...register('email', {
                          required: true,
                          maxLength: 100,
                        })}
                        type="email"
                        id="email"
                        name="email"
                        className="rounded border border-gray-300 bg-transparent py-3 pl-3 text-sm text-gray-800 shadow-sm focus:border-indigo-700 focus:outline-none  "
                      />
                    </div>
                    <div className="mb-6 flex flex-col md:w-2/5 lg:w-2/5 xl:w-2/5">
                      <label
                        htmlFor="sector"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Sector
                      </label>
                      <input
                        {...register('sector', {
                          required: true,
                        })}
                        type="text"
                        id="sector"
                        name="sector"
                        className="rounded border border-gray-300 bg-transparent py-3 pl-3 text-sm text-gray-800 shadow-sm focus:border-indigo-700 focus:outline-none  "
                      />
                    </div>
                    <div className="mb-6 flex flex-col md:w-2/5 lg:w-2/5 xl:w-2/5">
                      <label
                        htmlFor="province"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Province
                      </label>
                      <div className="relative flex rounded border border-gray-300 shadow-sm ">
                        <select
                          {...register('province', { required: true })}
                          type="text"
                          name="province"
                          id="province"
                          className="z-10 w-full appearance-none rounded border border-transparent bg-white py-3 pl-3 text-sm text-gray-800 focus:border-indigo-700  focus:outline-none"
                        >
                          <option value="Eastern Cape">Eastern Cape</option>
                          <option value=" Free State"> Free State</option>
                          <option value=" Gauteng"> Gauteng</option>
                          <option value=" KwaZulu-Natal"> KwaZulu-Natal</option>
                          <option value=" Limpopo"> Limpopo</option>
                          <option value=" Mpumalanga"> Mpumalanga</option>
                          <option value=" Northern Cape"> Northern Cape</option>
                          <option value=" North West"> North West</option>
                          <option value=" Western Cape"> Western Cape</option>
                        </select>
                        <div
                          className="pointer-events-none absolute right-0 bottom-0 top-0 z-20 mx-auto flex flex-col
                                      items-center justify-center border-l border-gray-300 px-4 text-gray-500   "
                        >
                          <svg
                            tabIndex={0}
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-chevron-up"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 15 12 9 18 15" />
                          </svg>
                          <svg
                            tabIndex={0}
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-chevron-down"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mb-6 flex flex-col md:w-2/5 lg:w-2/5 xl:w-2/5">
                      <label
                        htmlFor="cluster"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Maritime Cluster Affiliation
                      </label>
                      <div className="relative flex rounded border border-gray-300 shadow-sm ">
                        <select
                          {...register('cluster', { required: true })}
                          type="text"
                          name="province"
                          required
                          id="province"
                          className="z-10 w-full appearance-none rounded border border-transparent bg-white py-3 pl-3 text-sm text-gray-800 focus:border-indigo-700  focus:outline-none"
                        >
                          <option value="Buffalo City Maritime Cluster">
                            Buffalo City Maritime Cluster
                          </option>
                          <option value=" Ethekwini Maritime Cluster">
                            {' '}
                            Ethekwini Maritime Cluster
                          </option>
                          <option value=" Nelson Mandela Bay Maritime Cluster">
                            {' '}
                            Nelson Mandela Bay Maritime Cluster
                          </option>
                          <option value=" Western Cape Maritime Cluster">
                            {' '}
                            Western Cape Maritime Cluster
                          </option>
                          <option value=" Garden Route Maritime Cluster">
                            {' '}
                            Garden Route Maritime Cluster
                          </option>
                          <option value=" Other"> Other</option>
                        </select>
                        <div
                          className="pointer-events-none absolute right-0 bottom-0 top-0 z-20 mx-auto flex flex-col
                                      items-center justify-center border-l border-gray-300 px-4 text-gray-500   "
                        >
                          <svg
                            tabIndex={0}
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-chevron-up"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 15 12 9 18 15" />
                          </svg>
                          <svg
                            tabIndex={0}
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-chevron-down"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto p-2">
              <h3 className="text-sm font-bold text-gray-700">
                POPIA COMPLIANT
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                The Protection of Personal Information Act (POPI Act) comes into
                effect on 1 July 2021 and to remain compliant with its
                provisions SAIMI would like to give you, as its stakeholder, the
                opportunity to unsubscribe should you wish to not receive any
                further communication from SAIMI.
              </p>
              <p className="mt-1 text-xs text-gray-600">
                SAIMI regularly sends communication to its stakeholders to
                inform them of any upcoming events and other industry related
                news. Your email address forms part of the SAIMI stakeholders’
                database and is used for the purpose of communicating the
                abovementioned information.
              </p>
            </div>
            <div className="flex w-full justify-end rounded-bl rounded-br bg-gray-300 py-4 px-4 sm:px-12">
              <button
                disabled={loading}
                className="rounded bg-custom px-8 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-sky-800 focus:outline-none"
                type="submit"
              >
                {loading ? 'Loading...' : 'Save'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default FormComponent
