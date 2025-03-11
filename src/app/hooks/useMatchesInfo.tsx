import {useQuery} from '@tanstack/react-query';
import matchesService from '../services/matchesService';

export function useMatchesInfo() {
    const { data, isLoading, isSuccess, isError, error, refetch, isFetching } = useQuery({
        queryKey: ['matchesInfo'],
        queryFn: () => matchesService.getMatches(),
        retry: 2,
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    });

    if (isError) {
        // console.error(error);
    }

    // console.log({ data, isLoading, isError, error, isSuccess });
    return { data, isLoading, isSuccess, isError, error, refetch, isFetching}
}