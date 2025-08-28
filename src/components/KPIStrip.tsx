import { ExclamationTriangleIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

const kpis = [
  {
    metric: 'Supplies',
    value: '5-6%',
    target: 'of collections',
    status: 'normal' as const,
    description: 'Industry benchmark for dental supplies cost'
  },
  {
    metric: 'Payroll',
    value: '28%',
    target: 'of collections',
    status: 'alert' as const,
    description: 'Target: Keep payroll under 28% of collections'
  },
  {
    metric: 'Insurance',
    value: 'Cash vs Billed',
    target: 'tracking',
    status: 'info' as const,
    description: 'Monitor actual cash received vs. amounts billed'
  }
]

const getStatusIcon = (status: 'normal' | 'alert' | 'info') => {
  switch (status) {
    case 'normal':
      return <CheckCircleIcon className="w-5 h-5 text-green-500" />
    case 'alert':
      return <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />
    case 'info':
      return <InformationCircleIcon className="w-5 h-5 text-blue-500" />
  }
}

const getStatusColor = (status: 'normal' | 'alert' | 'info') => {
  switch (status) {
    case 'normal':
      return 'border-green-200 bg-green-50'
    case 'alert':
      return 'border-yellow-200 bg-yellow-50'
    case 'info':
      return 'border-blue-200 bg-blue-50'
  }
}

export default function KPIStrip() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Key Dental Practice Benchmarks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Monitor these critical metrics to ensure your practice is running efficiently and profitably
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border ${getStatusColor(kpi.status)} transition-all duration-200 hover:shadow-md`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {kpi.metric}
                </h3>
                {getStatusIcon(kpi.status)}
              </div>
              
              <div className="mb-3">
                <span className="text-3xl font-bold text-gray-900">
                  {kpi.value}
                </span>
                <span className="text-sm text-gray-600 ml-1">
                  {kpi.target}
                </span>
              </div>
              
              <p className="text-sm text-gray-600">
                {kpi.description}
              </p>
              
              {kpi.status === 'alert' && (
                <div className="mt-3 p-2 bg-yellow-100 rounded-md">
                  <p className="text-xs text-yellow-800 font-medium">
                    ⚠️ Monitor closely - this metric affects profitability
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            These benchmarks are based on industry data and successful dental practices. 
            Individual results may vary based on practice size and location.
          </p>
        </div>
      </div>
    </section>
  )
}
