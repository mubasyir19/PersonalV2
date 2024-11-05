export default function Login() {
  return (
    <form
      className="flex w-80 flex-col gap-y-4 rounded-lg border border-blue-900 bg-gradient-to-tl from-blue-900 to-black p-4"
      onSubmit={() => alert("under maintainance")}
    >
      <h2 className="text-center text-2xl font-semibold text-white">Login</h2>
      <div className="form-group">
        <label className="text-white">Username</label>
        <input
          type="text"
          name="username"
          className="w-full rounded-lg border-2 border-slate-300 bg-transparent p-2 text-base text-white placeholder:text-sm placeholder:italic placeholder:text-slate-400"
          placeholder="Type your username"
        />
      </div>
      <div className="form-group">
        <label className="text-white">Password</label>
        <input
          type="password"
          name="password"
          className="w-full rounded-lg border-2 border-slate-300 bg-transparent p-2 text-base text-white placeholder:text-sm placeholder:italic placeholder:text-slate-400"
          placeholder="Type your password"
        />
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-500 py-2 text-center text-white hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </form>
  );
}
