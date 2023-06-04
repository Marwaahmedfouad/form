import React from 'react'
export default function Child2({ user }) {
  return (
    <div>
      <table class="table table-light w-50 mx-auto text-center">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {user.slice(1).map((usr) =>
            <tr>
              <td>{usr.name}</td>
              <td>{usr.email}</td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}
