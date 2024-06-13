import React from "react";

export function ProductsIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#4CD081"
      className={`size-16 mr-2 ${className}`}
    >
      <rect
        width="8.4"
        height="8.4"
        x="2.4"
        y="2.4"
        rx="2.5"
        fill="#26946C"
      ></rect>
      <rect width="8.4" height="8.4" x="12" y="2.4" rx="2.5"></rect>
      <rect width="8.4" height="8.4" x="12" y="12" rx="2.5"></rect>
      <rect width="8.4" height="8.4" x="2.4" y="12" rx="2.5"></rect>
    </svg>
  );
}

export function PaymentsIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 64 64"
      className={`size-16 mr-2 ${className}`}
    >
      <g clipPath="url(#clip0_11024_980)">
        <circle cx="34" cy="34" r="30" fill="#C5710F" />
        <path
          fill="#FFE769"
          fillRule="evenodd"
          d="M30 60c16.569 0 30-13.431 30-30C60 13.431 46.569 0 30 0 13.431 0 0 13.431 0 30c0 16.569 13.431 30 30 30Zm2.178-49.639a2.069 2.069 0 0 1 1.796 2.31l-.46 3.676 5.314.664a2.069 2.069 0 1 1-.513 4.106l-5.313-.664-.978 7.82 1.96.23a8.208 8.208 0 0 1-1.866 16.31l-2.132-.237-.445 3.563a2.069 2.069 0 0 1-4.106-.514l.438-3.506-7.48-.831a2.069 2.069 0 1 1 .456-4.113l7.538.838 1.014-8.118-1.48-.174a8.099 8.099 0 0 1-7.152-8.043c0-4.872 4.27-8.64 9.103-8.036l1.537.192.46-3.677a2.07 2.07 0 0 1 2.31-1.796Zm-4.82 9.387 1.538.192-.982 7.849-1.51-.178a3.96 3.96 0 1 1 .955-7.863ZM30.5 40.47l1.01-8.091 1.99.234a4.07 4.07 0 0 1-.925 8.087l-2.076-.23Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_11024_980">
          <path fill="#fff" d="M0 0h64v64H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function OrdersIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 64 64"
      className={`size-16 mr-2 ${className}`}
    >
      <path
        fill="#D8591B"
        fillRule="evenodd"
        d="M12 16a6 6 0 0 0-6 6v34a6 6 0 0 0 6 6h40a6 6 0 0 0 6-6V22a6 6 0 0 0-6-6H12Zm2 6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H14Z"
        clipRule="evenodd"
      />
      <path fill="#FF9650" d="M38 12h10v4H38z" />
      <path
        fill="#D8591B"
        d="M32 4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H36a4 4 0 0 1-4-4V4Z"
      />
      <path
        fill="#FF9650"
        d="M4.961 38.424A4 4 0 0 1 8.638 36h46.59a4 4 0 0 1 3.745 2.595l2.488 6.634a25.33 25.33 0 0 1 1.12 13.862A3.619 3.619 0 0 1 59.034 62H5.39a4 4 0 0 1-3.946-3.342l-.094-.566A28 28 0 0 1 3.232 42.46l1.73-4.035Z"
      />
      <path
        fill="#D8591B"
        d="M9.544 41.367A2 2 0 0 1 11.442 40h41.117a2 2 0 0 1 1.897 1.367l2.667 8A2 2 0 0 1 55.225 52H8.775a2 2 0 0 1-1.897-2.633l2.666-8Z"
      />
    </svg>
  );
}

export function SubscriptionsIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 64 64"
      className={`size-16 mr-2 ${className}`}
    >
      <path
        fill="#FD585B"
        d="M61.086 31.447c-.019-1.032-.879-1.828-1.91-1.842l-7.623-.101c-1.229-.017-2.173 1.072-2.16 2.301a17.489 17.489 0 0 1-5.304 12.766c-5.983 5.826-15.06 6.523-21.781 2.161l3.213-3.129c1.276-1.243.413-3.409-1.369-3.433l-15.228-.202a2 2 0 0 0-2.027 1.974L6.696 57.17c-.024 1.782 2.118 2.703 3.395 1.46l3.709-3.613c11.348 8.92 27.826 8.28 38.45-2.065 6.031-5.873 8.981-13.716 8.836-21.505Z"
      />
      <path
        fill="#B80914"
        d="M55.256 24.032a2 2 0 0 0 2.027-1.974l.202-15.228c.023-1.782-2.119-2.703-3.395-1.46l-3.71 3.613C39.032.063 22.554.703 11.93 11.048 5.9 16.921 2.95 24.764 3.094 32.553c.02 1.032.879 1.829 1.91 1.842l7.623.101c1.229.017 2.174-1.072 2.16-2.301a17.49 17.49 0 0 1 5.304-12.766c5.983-5.826 15.06-6.522 21.782-2.161l-3.214 3.129c-1.276 1.243-.413 3.409 1.37 3.433l15.227.202Z"
      />
    </svg>
  );
}

export function StudioIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 64 64"
      className={`size-16 mr-2 ${className}`}
    >
      <path
        fill="#AEAEF4"
        fillRule="evenodd"
        d="m4.184 35.991-2.713.833c-1.68.515-2.005 2.85-.535 3.842L27.55 58.629a7.908 7.908 0 0 0 8.9 0l26.614-17.963c1.47-.992 1.146-3.327-.535-3.842l-2.713-.833-21.098 8.69a17.761 17.761 0 0 1-13.435 0l-21.1-8.69Z"
        clipRule="evenodd"
      />
      <path
        fill="#4040D9"
        d="M28.252 4.514a13.927 13.927 0 0 1 7.496 0l26.663 7.465a2.08 2.08 0 0 1 0 4.043l-26.663 7.464a13.928 13.928 0 0 1-7.496 0L1.59 16.021a2.08 2.08 0 0 1 0-4.043l26.663-7.464Z"
      />
      <path
        fill="#AEAEF4"
        fillRule="evenodd"
        d="m5.989 23.484-4.6 1.42c-1.755.543-1.877 2.674-.193 3.367l26.372 10.862a11.763 11.763 0 0 0 8.864 0L62.804 28.27c1.684-.693 1.562-2.824-.193-3.366l-4.6-1.421-20.646 5.78a19.926 19.926 0 0 1-10.73 0l-20.646-5.78Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ComposerIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 64 64"
      className={`size-16 mr-2 ${className}`}
    >
      <path
        fill="#7BC4ED"
        d="m55.478 54.921-3.757 3.758a3 3 0 0 1-4.242 0L12.798 24l8-8 34.68 34.679a3 3 0 0 1 0 4.242Z"
      />
      <path
        fill="#227FB4"
        d="M1.6 46.4c8.533-2.133 10.666-4.267 12.8-12.8 2.133 8.533 4.266 10.667 12.8 12.8-8.534 2.133-10.667 4.267-12.8 12.8-2.134-8.533-4.267-10.667-12.8-12.8ZM25.6 11.2C33.066 9.333 34.933 7.467 36.8 0c1.866 7.467 3.733 9.333 11.2 11.2-7.467 1.867-9.334 3.733-11.2 11.2-1.867-7.467-3.734-9.333-11.2-11.2ZM44.8 24c5.333-1.333 6.667-2.667 8-8 1.333 5.333 2.667 6.667 8 8-5.333 1.333-6.667 2.667-8 8-1.333-5.333-2.667-6.667-8-8ZM4.614 12.986l5.172-5.172a2 2 0 0 1 2.828 0L20.8 16l-8 8-8.186-8.186a2 2 0 0 1 0-2.828Z"
      />
    </svg>
  );
}

export function ExtensionsIcon({ className }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`size-16 mr-2 ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.0004 43.2C46.1389 43.2 57.6004 38.9019 57.6004 33.6V52.8C57.6004 58.1019 46.1389 62.4 32.0004 62.4C17.8619 62.4 6.40039 58.1019 6.40039 52.8V33.6C6.40039 38.9019 17.8619 43.2 32.0004 43.2Z"
        fill="#C0C7DA"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56.7939 31.2C53.952 35.3406 43.929 38.4 32.0004 38.4C20.0718 38.4 10.0488 35.3406 7.2069 31.2C6.68041 31.9671 6.40039 32.7713 6.40039 33.6C6.40039 38.9019 17.8619 43.2 32.0004 43.2C46.1389 43.2 57.6004 38.9019 57.6004 33.6C57.6004 32.7713 57.3204 31.9671 56.7939 31.2Z"
        fill="#566694"
      />
      <ellipse cx="32.0004" cy="12.8" rx="25.6" ry="9.6" fill="#566694" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.0004 22.4C46.1389 22.4 57.6004 18.1019 57.6004 12.8V28.8C57.6004 34.1019 46.1389 38.4 32.0004 38.4C17.8619 38.4 6.40039 34.1019 6.40039 28.8V12.8C6.40039 18.1019 17.8619 22.4 32.0004 22.4Z"
        fill="#C0C7DA"
      />
    </svg>
  );
}
