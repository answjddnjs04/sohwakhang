export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="border-b border-emerald-100 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🍀</span>
              <h1 className="text-2xl font-bold text-emerald-800">소확행</h1>
            </div>
            <nav className="flex gap-4">
              <button className="rounded-full bg-emerald-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-emerald-700">
                시작하기
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-5xl font-bold text-emerald-900">
            소소한 확실한 행복
          </h2>
          <p className="mb-4 text-xl text-emerald-700">
            자극적인 SNS와 달리, 일상 속 작은 행복을 기록하고 공유하세요
          </p>
          <p className="mb-12 text-lg text-emerald-600">
            타인과의 비교가 아닌, 나만의 행복에 집중하는 공간입니다
          </p>

          {/* Feature Cards */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 text-4xl">📅</div>
              <h3 className="mb-3 text-xl font-bold text-emerald-800">
                나만의 행복 캘린더
              </h3>
              <p className="text-emerald-600">
                자극적인 피드 대신 내가 쌓아온 행복한 순간들을 캘린더로 확인하세요
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 text-4xl">🍀</div>
              <h3 className="mb-3 text-xl font-bold text-emerald-800">
                네잎클로버 평가
              </h3>
              <p className="text-emerald-600">
                하트 대신 네잎클로버로 행복의 정도를 표현하고 공유하세요
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 text-4xl">🔍</div>
              <h3 className="mb-3 text-xl font-bold text-emerald-800">
                새로운 행복 발견
              </h3>
              <p className="text-emerald-600">
                해시태그로 다른 사람들의 소확행을 검색하고 나만의 행복을 찾아보세요
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 p-12 text-white">
            <h3 className="mb-4 text-3xl font-bold">
              오늘의 소확행을 시작해보세요
            </h3>
            <p className="mb-8 text-lg opacity-90">
              작은 행복이 모여 큰 변화를 만듭니다
            </p>
            <button className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-emerald-700 transition hover:bg-emerald-50">
              지금 시작하기
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white/60 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-emerald-700">1,234</div>
              <div className="mt-2 text-emerald-600">공유된 소확행</div>
            </div>
            <div className="rounded-xl bg-white/60 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-emerald-700">567</div>
              <div className="mt-2 text-emerald-600">행복한 사용자</div>
            </div>
            <div className="rounded-xl bg-white/60 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-emerald-700">89%</div>
              <div className="mt-2 text-emerald-600">만족도</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-100 bg-white/80 py-8">
        <div className="container mx-auto px-4 text-center text-emerald-600">
          <p>© 2025 소확행. 모든 작은 행복을 응원합니다.</p>
        </div>
      </footer>
    </div>
  );
}
