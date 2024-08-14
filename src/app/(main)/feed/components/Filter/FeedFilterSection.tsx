import FeedFilterGender from './FeedFilterGender';
import { useFeedFilterContext } from './FeedFilterProvider';

export default function FeedFilterSection() {
  const { state } = useFeedFilterContext();

  return (
    <div className="flex-auto py-5">
      {{ gender: <FeedFilterGender />, region: null, age: null }[state.selectedTab]}
    </div>
  );
}
