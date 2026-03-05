export async function retry<T>(
  action: () => Promise<T>,
  retries = 3
): Promise<T> {

  let lastError

  for (let i = 0; i < retries; i++) {

    try {

      return await action()

    } catch (error) {

      lastError = error

      console.log(`Retry attempt ${i + 1} failed`)

    }

  }

  throw lastError

}