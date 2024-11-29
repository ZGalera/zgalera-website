/**
 * Represents an employee with a name, GitHub username, and a short description.
 */
export type Employee = {
	/**
	 * The name of the employee.
	 *
	 * @example 'John Doe'
	 */
	name: string

	/**
	 * The GitHub username of the employee.
	 *
	 * @example 'johndoe'
	 */
	github: string

	/**
	 * A short description of the employee.
	 *
	 * @example 'Пише на пітоні'
	 */
	about: string

	/**
	 * Whether the employee has a custom avatar.
	 *
	 * @default false
	 */
	customAvatar?: boolean

	/**
	 * The URL of the custom avatar of the employee.
	 *
	 * @example 'https://example.com/avatar.png'
	 */
	customAvatarURL?: string
}
