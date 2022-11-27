import React from 'react'
import './lesson_4';
import {handlePromise} from "./lesson_4";

export type HandlePromiseType<T = any> = {
    promise: null | Promise<T>,
    resolve: null | Function,
    reject: null | Function,
    onSuccess: (param: string) => void
    onError: (param: string) => void
}


const Lesson4 = () => {


    const resolvePromise1 = () => {
        handlePromise.resolve?.(handlePromise.onSuccess('success'))
        console.log(handlePromise)
    }
    const rejectPromise1 = () => {
        handlePromise.reject?.(handlePromise.onError('error'))
        console.log(handlePromise)
    }

    const createPromise = () => {

        handlePromise.promise = new Promise((resolvePromise, rejectPromise) => {

            handlePromise.resolve = resolvePromise;

            handlePromise.reject = rejectPromise;
        });
    }


    return (
        <div>
            <button id='btn-create-promise' onClick={createPromise}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={resolvePromise1}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={rejectPromise1}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;