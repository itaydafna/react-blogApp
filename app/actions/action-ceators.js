export const CHANGE_SECTION = 'CHANG_SECTION';


export function changeSection(section){
    return {
        type: CHANGE_SECTION,
        payload: section
    }
}