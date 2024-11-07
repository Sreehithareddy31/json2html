export default function json2html(data) {
    // Extract unique keys from data to use as table headers
    const headers = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));

    // Start building the HTML table with the required data attribute
    let html = `<table data-user="malakuntlasreehitha@gmail.com">`;
    html += `<thead><tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr></thead><tbody>`;

    // Iterate over data array to create table rows
    data.forEach(row => {
        html += `<tr>${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}</tr>`;
    });

    // Close the table tags
    html += `</tbody></table>`;
    return html;
}
