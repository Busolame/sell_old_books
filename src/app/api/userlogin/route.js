export async function POST(request) {
    const userData = await request.json();

    console.log(userData)

    return Response.json({message: "success", data: userData})    
}
