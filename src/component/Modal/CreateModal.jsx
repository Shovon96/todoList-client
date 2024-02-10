/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";

const CreateModal = ({ isOpen, closeModal, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);

    const onSubmit = async (data) => {
        const updatedData = {
            title: data.title,
            description: data.description,
            priority: data.priority,
            deadline: data.deadline,
            email: user?.email,
            status: "todo",
        };

        const { data: res } = await axiosSecure.post("/task", updatedData);
        if (res.insertedId) {
            toast.success("Task Added Successfully");
            closeModal();
        }
        refetch();
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-xl font-bold text-center leading-6 text-blue-600 "
                                    >
                                        Add Task
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <label className="text-blue-600 font-semibold text-lg">Title: </label>
                                            <input
                                                {...register("title")}
                                                className="outline-blue-600 overflow-hidden py-1 px-1 w-full bg-gray-100"
                                                type="text"
                                                placeholder="Title"
                                                name="title"
                                                required
                                            /> <br />
                                            <label className="text-blue-600 font-semibold text-lg">Description: </label>
                                            <textarea
                                                {...register("description")}
                                                required
                                                className="outline-blue-600 py-1 px-1 w-full bg-gray-100"
                                                placeholder="Description"
                                                name="description..."
                                                rows='6'
                                            ></textarea>
                                            <br />
                                            <label className="text-blue-600 font-semibold">Priority: </label>
                                            <select
                                                {...register("priority")}
                                                required
                                                className="rounded-lg mt-2 bg-blue-100 outline-blue-600"
                                                name="priority"
                                            >
                                                <option disabled>Set Status</option>
                                                <option value="low">Low</option>
                                                <option value="moderate">Moderate</option>
                                                <option value="high">High</option>
                                            </select>
                                            <label className="text-blue-500 pl-1 font-semibold">Deadline: </label>
                                            <input
                                                required
                                                {...register("deadline")}
                                                className="rounded-lg mt-2 bg-blue-100 outline-blue-600"
                                                type="date"
                                                name="deadline"
                                            />
                                            <br />
                                            <button
                                                type="submit"
                                                className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            >
                                                Add Class
                                            </button>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default CreateModal;