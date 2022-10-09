import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { ReactComponent as IconClock } from "../../assets/svg/icon-clock.svg"
import { CardContainer } from './Card.styled'

dayjs.extend(relativeTime)

type CardProps = {
  title: string;
  timestamp: string;
  status: "results optimised" | "unoptimised" | "failed";
}

const Card = ({ title, timestamp, status }: CardProps) => {
  const formatDate = (timestamp: string) => {
    const created = dayjs(timestamp)
    const now = dayjs(new Date())
    if (now.diff(created, 'month', true) >= 1) {
      return created.format('DD MMM YYYY')
    } else {
      return dayjs(created).from(now)
    }
  }

  return (
    <CardContainer tabIndex={0}>
      <h3>{title}</h3>
      <div className="timestamp">
        <IconClock />
        <p>Created <time>{formatDate(timestamp)}</time></p>
      </div>
      <p className={`status status--${status === 'results optimised' ? 'optimised' : status}`}>
        <span className="status__indicator" />
        <span className="status__text">
          {status}
        </span>
      </p>
    </CardContainer>
  )
}

export default Card;