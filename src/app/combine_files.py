import os
import glob

def combine_js_files(directory='.', output_file='combined.js', recursive=False, pattern='*.js'):
    """
    Combine multiple JavaScript files into a single file.
    
    Args:
        directory: Path to the directory containing JS files (default: current directory)
        output_file: Name of the combined output file (default: combined.js)
        recursive: If True, search subdirectories as well (default: False)
        pattern: File pattern to match (default: *.js)
    """
    js_files = []
    
    try:
        if recursive:
            # Recursively find all JS files
            search_pattern = os.path.join(directory, '**', pattern)
            js_files = glob.glob(search_pattern, recursive=True)
        else:
            # Find JS files in the specified directory only
            search_pattern = os.path.join(directory, pattern)
            js_files = glob.glob(search_pattern)
        
        # Sort files alphabetically
        js_files.sort()
        
        # Remove the output file from the list if it exists
        js_files = [f for f in js_files if f != output_file]
        
        if not js_files:
            print(f"No JavaScript files found in {directory}")
            return
        
        # Combine all files
        with open(output_file, 'w', encoding='utf-8') as outfile:
            for i, js_file in enumerate(js_files):
                # Write a separator with the file name
                outfile.write(f"// ========================================\n")
                outfile.write(f"// File: {js_file}\n")
                outfile.write(f"// ========================================\n\n")
                
                # Read and write the file content
                try:
                    with open(js_file, 'r', encoding='utf-8') as infile:
                        content = infile.read()
                        outfile.write(content)
                        
                        # Add spacing between files
                        if i < len(js_files) - 1:
                            outfile.write("\n\n\n")
                except Exception as e:
                    print(f"Error reading {js_file}: {e}")
                    continue
        
        print(f"Successfully combined {len(js_files)} JavaScript files.")
        print(f"Output saved to: {output_file}")
        print("\nFiles included:")
        for js_file in js_files:
            print(f"  - {js_file}")
        
    except Exception as e:
        print(f"Error: {e}")

def combine_specific_files(file_list, output_file='combined.js'):
    """
    Combine a specific list of JavaScript files into one file.
    
    Args:
        file_list: List of file paths to combine
        output_file: Name of the combined output file
    """
    try:
        with open(output_file, 'w', encoding='utf-8') as outfile:
            for i, js_file in enumerate(file_list):
                # Write a separator with the file name
                outfile.write(f"// ========================================\n")
                outfile.write(f"// File: {js_file}\n")
                outfile.write(f"// ========================================\n\n")
                
                # Read and write the file content
                try:
                    with open(js_file, 'r', encoding='utf-8') as infile:
                        content = infile.read()
                        outfile.write(content)
                        
                        # Add spacing between files
                        if i < len(file_list) - 1:
                            outfile.write("\n\n\n")
                except Exception as e:
                    print(f"Error reading {js_file}: {e}")
                    continue
        
        print(f"Successfully combined {len(file_list)} files into {output_file}")
        
    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    # Example 1: Combine all .js files in current directory
    # Combine specific files you choose
    #files_to_combine = ['page.js','globals.css','../components/Testimonials.js','../components/Products.js','../components/Hero.js', 'layout.js','../components/About.js','../components/Footer.js','../components/Header.js','../components/Hero.js']
    files_to_combine = ['page.js','globals.css','../components/Testimonials.js','../components/Hero.js', 'layout.js','../components/Header.js']
    combine_specific_files(files_to_combine, 'combined_output.js')

    # Combine .jsx files instead
    #combine_js_files(pattern='*.jsx', output_file='combined_react.jsx')
    
    # Example 2: Combine all .js files in a specific directory, including subdirectories
    # combine_js_files(directory='./src', output_file='all_code.js', recursive=True)
    
    # Example 3: Combine specific files
    # files_to_combine = ['app.js', 'utils.js', 'config.js']
    # combine_specific_files(files_to_combine, 'combined_output.js')
    
    # Example 4: Combine only .jsx files
    # combine_js_files(pattern='*.jsx', output_file='combined_react.jsx')