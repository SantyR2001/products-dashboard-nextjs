import { useState } from 'react';
import { XCircleIcon } from '@heroicons/react/20/solid';

const Alert = ({ alert, handleClose }) => {
  const alertColor =
    alert.type === 'success'
      ? {
          background: 'bg-green-200',
          closeIcon: 'text-green-600',
        }
      : {
          background: 'bg-red-200',
          closeIcon: 'text-red-600',
        };

  if (alert && alert.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 8000);
  }

  return (
    <>
      {alert?.active && (
        <div x-data className={`${alertColor.background} p-5 w-full rounded mb-8`}>
          <div className="flex space-x-3">
            <div className={`flex-1 leading-tight text-sm font-medium`}>{alert.message}</div>
            <button type="button">
              <XCircleIcon className={`w-6 h-6 ${alertColor.closeIcon}`} onClick={handleClose} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
