"use server"

export async function PostTweet(formData: FormData) {
    const content = formData.get("content")
    console.log(content)
}