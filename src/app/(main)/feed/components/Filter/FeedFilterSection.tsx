import FeedFilterAddress from './FeedFilterAddress';
import FeedFilterAge from './FeedFilterAge';
import FeedFilterGender from './FeedFilterGender';
import { useFeedFilterContext } from './FeedFilterProvider';

export default function FeedFilterSection() {
  const { filterState } = useFeedFilterContext();

  return (
    <div className="flex flex-auto flex-col py-5">
      {
        { gender: <FeedFilterGender />, address: <FeedFilterAddress />, age: <FeedFilterAge /> }[
          filterState.selectedTab
        ]
      }
    </div>
  );
}
