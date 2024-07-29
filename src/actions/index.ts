'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from '@/db';


export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },

  });
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  revalidatePath('/');
  redirect('/');
}

export async function createSnippet(formState: { message: string }, formData: FormData) {

  try {
    // check the user's inputs and make sure they are valid
    const title = formData.get('title');
    const code = formData.get('code');
    // take a val and create new record in the database

    if (typeof title !== 'string' || title.length < 3) {
      return {
        message: 'Title must be longer',
      };
    }
    if (typeof code !== 'string' || code.length < 6) {
      return {
        message: 'Code must be longer',
      };
    }
    const snippet = await db.snippet.create({
      data: {
        title: title,
        code: code,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return {
        message: 'Something went wrong...',
      };
    }
  }


  // redirect the user back to home page or page details
  revalidatePath('/');
  redirect('/');

}
