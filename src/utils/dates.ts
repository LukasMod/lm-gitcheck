import { pl } from 'date-fns/locale'
import { format } from 'date-fns'

export const formatDateString = (dateString: string, formatStr = 'PP') => {
  return format(new Date(dateString), formatStr, { locale: pl })
}
