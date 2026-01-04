import { Phone, Mail} from 'lucide-react';

function ContactInfo(){

    return(
        <div className="bg-blue-950 h-15 flex items-center justify-between text-white px-10">
            <div className='flex self-center'>
                <Phone />
                <p className='text-sm ml-2 mr-5'>(225) 555-0118</p>
                <Mail />
                <p className='text-sm ml-2'>michelle.rivera@example.com</p>
            </div>

            <div>
                <p>Follow Us and get a chance to win 80% off</p>
            </div>

            <div className='flex flex-row gap-5'>
                <p>Follow Us :</p>
                <button><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1pbnN0YWdyYW0taWNvbiBsdWNpZGUtaW5zdGFncmFtIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHg9IjIiIHk9IjIiIHJ4PSI1IiByeT0iNSIvPjxwYXRoIGQ9Ik0xNiAxMS4zN0E0IDQgMCAxIDEgMTIuNjMgOCA0IDQgMCAwIDEgMTYgMTEuMzd6Ii8+PGxpbmUgeDE9IjE3LjUiIHgyPSIxNy41MSIgeTE9IjYuNSIgeTI9IjYuNSIvPjwvc3ZnPg=="/></button>
                <button><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS15b3V0dWJlLWljb24gbHVjaWRlLXlvdXR1YmUiPjxwYXRoIGQ9Ik0yLjUgMTdhMjQuMTIgMjQuMTIgMCAwIDEgMC0xMCAyIDIgMCAwIDEgMS40LTEuNCA0OS41NiA0OS41NiAwIDAgMSAxNi4yIDBBMiAyIDAgMCAxIDIxLjUgN2EyNC4xMiAyNC4xMiAwIDAgMSAwIDEwIDIgMiAwIDAgMS0xLjQgMS40IDQ5LjU1IDQ5LjU1IDAgMCAxLTE2LjIgMEEyIDIgMCAwIDEgMi41IDE3Ii8+PHBhdGggZD0ibTEwIDE1IDUtMy01LTN6Ii8+PC9zdmc+"/></button>
                <button><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1mYWNlYm9vay1pY29uIGx1Y2lkZS1mYWNlYm9vayI+PHBhdGggZD0iTTE4IDJoLTNhNSA1IDAgMCAwLTUgNXYzSDd2NGgzdjhoNHYtOGgzbDEtNGgtNFY3YTEgMSAwIDAgMSAxLTFoM3oiLz48L3N2Zz4="/></button>
                <button><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10d2l0dGVyLWljb24gbHVjaWRlLXR3aXR0ZXIiPjxwYXRoIGQ9Ik0yMiA0cy0uNyAyLjEtMiAzLjRjMS42IDEwLTkuNCAxNy4zLTE4IDExLjYgMi4yLjEgNC40LS42IDYtMkMzIDE1LjUuNSA5LjYgMyA1YzIuMiAyLjYgNS42IDQuMSA5IDQtLjktNC4yIDQtNi42IDctMy44IDEuMSAwIDMtMS4yIDMtMS4yeiIvPjwvc3ZnPg=="/></button>
            </div>
        </div>
    )
}

export default ContactInfo;