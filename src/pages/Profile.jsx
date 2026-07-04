import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPurchaseHistory } from '../utils/auth';

const Profile = ({ user }) => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    setPurchaseHistory(getPurchaseHistory(user?.id));
  }, [user]);

  return (
    <div className="min-h-[calc(100vh-76px)] bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white shadow-lg">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/15 text-4xl">
                👤
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Mi perfil</p>
                <h1 className="mt-1 text-3xl font-black">{user.name}</h1>
                <p className="mt-2 text-gray-300">{user.role} · {user.company}</p>
              </div>
            </div>
            <Link
              to="/products"
              className="rounded-full bg-cyan-400 px-6 py-3 text-center font-bold text-gray-950 transition hover:bg-cyan-300"
            >
              Seguir comprando
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-bold text-gray-900">Datos del usuario</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-gray-500">Nombre</p>
                <p className="text-gray-900">{user.firstName} {user.lastName}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-500">Correo</p>
                <p className="text-gray-900">{user.email}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-500">Teléfono</p>
                <p className="text-gray-900">{user.phone}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-500">Empresa</p>
                <p className="text-gray-900">{user.company}</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Historial de compras</h2>
                <p className="text-sm text-gray-500">Tus pedidos confirmados aparecerán aquí.</p>
              </div>
              <span className="rounded-full bg-cyan-50 px-4 py-1 text-sm font-bold text-cyan-700">
                {purchaseHistory.length} compras
              </span>
            </div>

            {purchaseHistory.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <p className="text-gray-700">Aún no tienes compras registradas.</p>
                <Link to="/products" className="mt-4 inline-block font-bold text-cyan-700 hover:underline">
                  Ver productos
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-gray-600">
                      <th className="px-4 py-3 font-bold">Pedido</th>
                      <th className="px-4 py-3 font-bold">Fecha</th>
                      <th className="px-4 py-3 font-bold">Productos</th>
                      <th className="px-4 py-3 font-bold">Estado</th>
                      <th className="px-4 py-3 text-right font-bold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {purchaseHistory.map((purchase) => (
                      <tr key={purchase.orderNumber} className="border-b border-slate-100">
                        <td className="px-4 py-4 font-bold text-gray-900">{purchase.orderNumber}</td>
                        <td className="px-4 py-4 text-gray-700">{purchase.date}</td>
                        <td className="px-4 py-4 text-gray-700">
                          {purchase.items.map((item) => `${item.name} x${item.quantity}`).join(', ')}
                        </td>
                        <td className="px-4 py-4">
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                            {purchase.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right font-bold text-gray-900">
                          ${purchase.total.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
