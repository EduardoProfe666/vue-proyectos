export const formatDateTime = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    const formattedHours = hours ? String(hours).padStart(2, '0') : '12'; // Format as string

    return `${day}/${month}/${year} ${formattedHours}:${minutes} ${ampm}`;
}

function* uniqueNumberGenerator() {
    let count = 1;
    while (true) {
        yield count++;
    }
}

const generator = uniqueNumberGenerator();

export const generateUniqueNumber = () => (generator.next().value as number)
