/**
 * Identifier for the {@link ExtensionPoint1} interface.
 */
export const EXTENSION_POINT_1 = "foo";

/**
 * An example extension interface to be implemented by a plugin.
 */
export interface ExtensionPoint1 {
  /**
   * Performs a greeting.
   */
  sayHello(): void;
}
