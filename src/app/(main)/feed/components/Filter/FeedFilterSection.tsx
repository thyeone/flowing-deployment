import FeedFilterAge from './FeedFilterAge';
import FeedFilterGender from './FeedFilterGender';
import { useFeedFilterContext } from './FeedFilterProvider';
import FeedFilterRegion from './FeedFilterRegion';

export default function FeedFilterSection() {
  const { state } = useFeedFilterContext();

  return (
    <div className="flex flex-auto flex-col py-5">
      {
        { gender: <FeedFilterGender />, region: <FeedFilterRegion />, age: <FeedFilterAge /> }[
          state.selectedTab
        ]
      }
    </div>
  );
}
