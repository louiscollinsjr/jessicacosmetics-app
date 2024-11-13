export default function Footer() {
    return (
        <footer className="w-full text-xs">
          <div className="bg-white py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-0 text-zinc-600">
                
                  <p>Telephone: (0775) 266 513</p>
                  <p>Email: hello@jessicacosmetics.ro</p>
                </div>
                <div className="space-y-0 sm:text-right text-zinc-600">
                  <p>Head Office - Arad</p>
                <p>Romania</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 py-4 px-4 sm:px-6 lg:px-8 text-zinc-600">
            <div className="max-w-7xl mx-auto">
              <p className="text-center">&copy; {new Date().getFullYear()} JessicaCosmetics.ro All rights reserved.</p>
            </div>
          </div>
        </footer>
      )
  }