export interface StatCard {
  id: number
  number: number
  label: string
  borderColor: string
  badgeColor: string
  suffix?: string
}

export const statsData: StatCard[] = [
  {
    id: 1,
    number: 26,
    label: 'Expert Teachers',
    borderColor: 'border-red-300',
    badgeColor: 'bg-red-500'
  },
  {
    id: 2,
    number: 51,
    label: 'Years of Experience',
    borderColor: 'border-yellow-300',
    badgeColor: 'bg-yellow-400'
  },
  {
    id: 3,
    number: 980,
    label: 'Happy Families',
    borderColor: 'border-blue-300',
    badgeColor: 'bg-blue-500'
  },
  {
    id: 4,
    number: 120,
    label: 'Awards Winners',
    borderColor: 'border-green-300',
    badgeColor: 'bg-green-500'
  }
]